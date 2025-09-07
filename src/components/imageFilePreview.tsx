import { tv } from "tailwind-variants";

export const ImageFilePreviewVariants = tv({
      base: "rounded-lg overflow-hidden"
})

export const ImageVariants = tv({
      base: "w-full h-full object-cover"
})

interface ImageFilePreviewProps extends React.ComponentProps<"img">{
      imageClassname?: string;
}

export default function ImageFilePreview({ className, imageClassname, ...props }: ImageFilePreviewProps) {
      return (
            <div className={ImageFilePreviewVariants(className)}>
                  <img className={ImageVariants({className: imageClassname})} {...props} />
            </div>
      );
}