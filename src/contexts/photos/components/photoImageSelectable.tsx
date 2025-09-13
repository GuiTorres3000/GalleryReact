import type React from "react";
import ImagePreview from "../../../components/imagePreview";
import { useState } from "react";
import InputCheckbox from "../../../components/inputCheckbox";
import { tv } from "tailwind-variants";

export const photoImageSelectableVariants = tv({
      base: "cursor-pointer relative rounded-lg",
      variants: {
            select: {
                  true: "outline-2 outline-accent-brand"
            }
      },
      defaultVariants: {
            select: true
      }
})

interface photoImageSelectableProps extends React.ComponentProps<typeof ImagePreview> {
      selected?: boolean;
      onSelectImage?: (selected: boolean) => void;
}

export default function photoImageSelectable({ selected, onSelectImage, imageClassname, className, ...props }: photoImageSelectableProps) {
      const [isSelected, setIsSelected] = useState(false);

      function handleSelected() {
            const newValue = !isSelected;
            setIsSelected(newValue);
            onSelectImage?.(newValue);
      }

      return (

            <label className={photoImageSelectableVariants({
                  className, select: isSelected
            })}>
                  <InputCheckbox size="sm" checked={isSelected} onChange={() => { handleSelected() }}
                        className="absolute top-1 left-1" />
                  <ImagePreview imageClassname={imageClassname} {...props} />
            </label>
      )
}
