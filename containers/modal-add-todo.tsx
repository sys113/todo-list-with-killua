"use client";

import IconXMark from "@/assets/icons/x-mark.svg";
import { useFormik } from "formik";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { z } from "zod";
import { useKillua } from "killua";
import { thunderTodos } from "@/thunders/todo";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalAddTodo(props: IProps): JSX.Element {
  // add todo to to localstorage / get todos length
  const localStorageTodos = useKillua(thunderTodos);

  // formik
  interface IFormik {
    title: string;
    description: string;
  }
  const formikConstant = {
    fields: {
      title: {
        label: "Title",
        placeholder: "type title here ...",
        type: "input",
        errors: {
          isRequired: "Title is required!",
        },
      },
      description: {
        label: "Description",
        placeholder: "type description here ...",
        type: "textarea",
        errors: {
          isRequired: "Description is required!",
          mustBeAtLeast4Characters:
            "Description must be at least 8 characters!",
          canBeUpTo300Characters: "Description can be up to 300 characters!",
        },
      },
    },
    title: "Add Todo",
    submit: "Add Todo",
  };
  const formik: any = useFormik<IFormik>({
    initialValues: {
      title: "",
      description: "",
    },
    validationSchema: toFormikValidationSchema(
      z.object({
        title: z.string({
          required_error: formikConstant.fields.title.errors.isRequired,
        }),
        description: z
          .string({
            required_error: formikConstant.fields.description.errors.isRequired,
          })
          .min(
            4,
            formikConstant.fields.description.errors.mustBeAtLeast4Characters,
          )
          .max(
            300,
            formikConstant.fields.description.errors.canBeUpTo300Characters,
          ),
      }),
    ),
    onSubmit: async (values) => {
      localStorageTodos.reducers.add({
        id: localStorageTodos.selectors.todosLength() + 1,
        title: values.title,
        description: values.description,
        status: "todo",
      });
      props.onClose();
      formik.resetForm();
    },
  });

  return (
    <div
      className={`duration-400 fixed bottom-0 left-0 right-0 top-0 z-[60] flex h-screen w-screen items-center justify-center backdrop-blur-[2px] transition-all ${
        props.isOpen ? "visible bg-black/20" : "invisible opacity-0"
      }`}
    >
      <div
        className={`flex w-full items-center justify-center transition-all duration-300 ${
          props.isOpen
            ? "scale-1 visible opacity-100"
            : "invisible scale-75 lg:opacity-0"
        }`}
      >
        <div
          onClick={() => {
            props.onClose();
            formik.resetForm();
          }}
          className="fixed bottom-0 left-0 right-0 top-0"
        ></div>
        <div
          className={`relative mx-5 flex w-full max-w-[400px] flex-col gap-4 rounded-xl border border-gray-600 bg-gray-800 p-5 [&_input:focus]:outline-none [&_textarea:focus]:outline-none`}
        >
          {/* head */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              {/* title */}
              <p className="text-[17px] font-semibold">
                {formikConstant.title}
              </p>
              {/* close btn */}
              <button
                onClick={() => {
                  props.onClose();
                  formik.resetForm();
                }}
                className="btn-animation"
              >
                <IconXMark className="h-[27px] w-[27px]" />
              </button>
            </div>
          </div>
          {/* body */}
          <form onSubmit={formik.handleSubmit} className="space-y-6">
            {/* fields */}
            <div className="space-y-7 [&_.field]:relative [&_.field]:my-1 [&_.field]:rounded-md [&_.field]:border [&_.field]:p-3 [&_input::placeholder]:text-sm [&_input]:w-full [&_input]:truncate [&_input]:bg-transparent [&_input]:text-sm [&_p]:absolute [&_p]:-top-3.5 [&_p]:left-2.5 [&_p]:w-fit [&_p]:bg-gray-800 [&_p]:p-1 [&_p]:text-sm [&_textarea::placeholder]:text-sm [&_textarea]:w-full [&_textarea]:truncate [&_textarea]:bg-transparent [&_textarea]:text-sm">
              {/* title */}
              <div>
                <div
                  className={`field ${
                    formik.errors.title && formik.touched.title
                      ? "!border-red-500"
                      : "!border-gray-600"
                  }`}
                >
                  <p
                    className={
                      formik.errors.title && formik.touched.title
                        ? "text-red-500"
                        : "text-white"
                    }
                  >
                    {formikConstant.fields.title.label}
                  </p>
                  <input
                    {...formik.getFieldProps("title")}
                    type="text"
                    placeholder={formikConstant.fields.title.placeholder}
                  />
                </div>
                {formik.errors.title && formik.touched.title ? (
                  <span className="ml-1.5 pt-0.5 text-sm text-red-500">
                    {formik.errors.title}
                  </span>
                ) : null}
              </div>
              {/* description */}
              <div>
                <div
                  className={`field ${
                    formik.errors.description && formik.touched.description
                      ? "!border-red-500"
                      : "!border-gray-600"
                  }`}
                >
                  <p
                    className={
                      formik.errors.description && formik.touched.description
                        ? "text-red-500"
                        : "text-white"
                    }
                  >
                    {formikConstant.fields.description.label}
                  </p>
                  <textarea
                    {...formik.getFieldProps("description")}
                    type="text"
                    className="max-h-[150px] min-h-[150px]"
                    placeholder={formikConstant.fields.description.placeholder}
                  />
                </div>
                {formik.errors.description && formik.touched.description ? (
                  <span className="ml-1.5 pt-0.5 text-sm text-red-500">
                    {formik.errors.description}
                  </span>
                ) : null}
              </div>
            </div>
            {/* submit btn */}
            <button
              type="submit"
              className="btn-animation w-full rounded-lg bg-purple-700 p-4 text-center font-medium"
            >
              {formikConstant.submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
