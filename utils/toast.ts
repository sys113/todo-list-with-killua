import { toast as toastify } from "react-toastify";

type ArgsType = {
  text: any;
  type: "error" | "success";
};

export default function toast(args: ArgsType): void {
  if (!toastify.isActive(args.text)) {
    toastify[args.type](args.text, {
      toastId: args.text,
    });
  }
}
