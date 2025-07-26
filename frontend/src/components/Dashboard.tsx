import { useForm, type SubmitHandler, useFieldArray } from "react-hook-form";
import type { EventFormType } from "../types/Event";
import {
  eventToForm,
  transformCategory,
  validateCategory,
} from "../services/formValidation";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { handleUpdateEvent, getEventBySlug } from "../services/event";

function Dashboard() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const auth = useAuth();

  const defaultEventData: EventFormType = {
    name: "",
    slug: slug ?? "",
    description: "",
    rules: [{ value: "" }],
    category: "CODING",
    prizes: [{ value: "" }],
    registrationDeadline: "",
    teamSize: "",
    eventDates: [{ value: "" }],
    organisers: [{ name: "", phoneNumber: "" }],
  };

  const [eventData, setEventData] = useState<EventFormType>(defaultEventData);
  const [loading, setLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    if (!auth || !(auth.slug === slug || auth.role === "ADMIN"))
      navigate("/login");
    const fetchEvent = async (slug: string | undefined) => {
      if (!slug) return false;

      const data = await getEventBySlug(slug, auth?.token);
      reset(eventToForm(data));

      if (!data) return false;

      setEventData(data);
      return true;
    };

    fetchEvent(slug).finally(() => setLoading(false));
  }, []);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<EventFormType>({ defaultValues: eventData });

  const {
    fields: ruleFields,
    append: appendRule,
    remove: removeRule,
  } = useFieldArray({
    control,
    name: "rules",
  });
  const {
    fields: prizeFields,
    append: appendPrize,
    remove: removePrize,
  } = useFieldArray({ control, name: "prizes" });
  const {
    fields: dateFields,
    append: appendDate,
    remove: removeDate,
  } = useFieldArray({ control, name: "eventDates" });
  const {
    fields: organiserFields,
    append: appendOrganiser,
    remove: removeOrganiser,
  } = useFieldArray({
    control,
    name: "organisers",
  });

  if (loading) return <div>Loading...</div>;

  const onSubmit: SubmitHandler<EventFormType> = (data) => {
    const updatedEvent = handleUpdateEvent(
      data,
      setMessage,
      auth?.token,
      auth?.logout
    );
    console.log(updatedEvent);
  };

  return (
    <div className="w-4/5 sm:w-3/5 grow flex flex-col items-center gap-y-6">
      <h1 className="text-4xl font-semibold">Manage Event</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-1 w-full"
      >
        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            className="outline-none border border-primary py-1 px-2 rounded-sm"
            {...register("name", { required: "This field is required" })}
            placeholder="Event Name"
          />
          <span
            className={`text-xs ${
              errors.name ? "text-red-500" : "text-transparent"
            }`}
          >
            {errors.name?.message}.
          </span>
        </div>

        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            className="outline-none border border-primary py-1 px-2 rounded-sm"
            {...register("slug", { required: "This field is required" })}
            placeholder="Event Slug"
          />
          <span
            className={`text-xs ${
              errors.slug ? "text-red-500" : "text-transparent"
            }`}
          >
            {errors.slug?.message}.
          </span>
        </div>

        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            className="outline-none border border-primary py-1 px-2 rounded-sm"
            {...register("category", {
              required: "This field is required",
              setValueAs: transformCategory,
              validate: validateCategory,
            })}
            placeholder="Event Category"
          />
          <span
            className={`text-xs ${
              errors.category ? "text-red-500" : "text-transparent"
            }`}
          >
            {errors.category?.message}.
          </span>
        </div>

        <div className="flex flex-col gap-y-1">
          <textarea
            className="outline-none border border-primary py-1 px-2 rounded-sm"
            {...register("description", { required: "This is required" })}
            placeholder="Event Description"
          />
          <span
            className={`text-xs ${
              errors.description ? "text-red-500" : "text-transparent"
            }`}
          >
            {errors.description?.message}.
          </span>
        </div>

        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            className="outline-none border border-primary py-1 px-2 rounded-sm"
            {...register("registrationDeadline", {
              required: "This field is required",
            })}
            placeholder="Registration Deadline"
          />
          <span
            className={`text-xs ${
              errors.registrationDeadline ? "text-red-500" : "text-transparent"
            }`}
          >
            {errors.registrationDeadline?.message}.
          </span>
        </div>

        <div className="flex flex-col gap-y-1">
          <input
            type="text"
            className="outline-none border border-primary py-1 px-2 rounded-sm"
            {...register("teamSize", { required: "This field is required" })}
            placeholder="Team Size"
          />
          <span
            className={`text-xs ${
              errors.teamSize ? "text-red-500" : "text-transparent"
            }`}
          >
            {errors.teamSize?.message}.
          </span>
        </div>

        <div className="flex gap-3 items-baseline w-full">
          <div className="flex flex-col gap-y-2 w-full">
            {ruleFields.map((field, index) => {
              return (
                <div key={field.id} className="flex w-full gap-3 items-center">
                  <input
                    type="text"
                    {...register(`rules.${index}.value` as const)}
                    className="outline-none border border-primary py-1 px-2 rounded-sm w-full sm:grow"
                    placeholder={`Rule ${index + 1}`}
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeRule(index)}
                      className="bg-ink text-background p-1 rounded-sm text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => appendRule({ value: "" })}
            className="bg-ink text-background py-1 px-2 rounded-sm text-sm"
          >
            Add
          </button>
        </div>

        <div className="flex gap-3 items-baseline w-full my-6">
          <div className="flex flex-col gap-y-2 w-full">
            {prizeFields.map((field, index) => {
              return (
                <div key={field.id} className="flex w-full gap-3 items-center">
                  <input
                    type="text"
                    {...register(`prizes.${index}.value` as const)}
                    className="outline-none border border-primary py-1 px-2 rounded-sm w-full sm:grow"
                    placeholder={`Prize ${index + 1}`}
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removePrize(index)}
                      className="bg-ink text-background p-1 rounded-sm text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => appendPrize({ value: "" })}
            className="bg-ink text-background py-1 px-2 rounded-sm text-sm"
          >
            Add
          </button>
        </div>

        <div className="flex gap-3 items-baseline w-full">
          <div className="flex flex-col gap-y-2 w-full">
            {dateFields.map((field, index) => {
              return (
                <div key={field.id} className="flex w-full gap-3 items-center">
                  <input
                    type="text"
                    {...register(`eventDates.${index}.value` as const)}
                    className="outline-none border border-primary py-1 px-2 rounded-sm w-full sm:grow"
                    placeholder={`Date ${index + 1}`}
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeDate(index)}
                      className="bg-ink text-background p-1 rounded-sm text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => appendDate({ value: "" })}
            className="bg-ink text-background py-1 px-2 rounded-sm text-sm"
          >
            Add
          </button>
        </div>

        <div className="flex gap-3 items-baseline w-full my-6">
          <div className="flex flex-col gap-y-2 w-full">
            {organiserFields.map((field, index) => {
              return (
                <div key={field.id} className="flex w-full gap-3 items-center">
                  <div className="flex flex-col gap-y-1 grow">
                    <input
                      type="text"
                      {...register(`organisers.${index}.name` as const)}
                      className="outline-none border border-primary py-1 px-2 rounded-sm w-full sm:grow"
                      placeholder={`Organiser ${index + 1} Name`}
                    />
                    <input
                      type="text"
                      {...register(`organisers.${index}.phoneNumber` as const)}
                      className="outline-none border border-primary py-1 px-2 rounded-sm w-full sm:grow"
                      placeholder={`Organiser ${index + 1} Phone Number`}
                    />
                  </div>
                  {index > 0 && (
                    <button
                      type="button"
                      onClick={() => removeOrganiser(index)}
                      className="bg-ink text-background p-1 rounded-sm text-sm"
                    >
                      Remove
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => appendOrganiser({ name: "", phoneNumber: "" })}
            className="bg-ink text-background py-1 px-2 rounded-sm text-sm"
          >
            Add
          </button>
        </div>

        <button
          type="submit"
          className="bg-ink text-background py-1 px-2 rounded-sm"
          disabled={message === "Submitting.."}
        >
          Submit
        </button>
      </form>
      <p className="text-primary">{message}</p>
    </div>
  );
}

export default Dashboard;
