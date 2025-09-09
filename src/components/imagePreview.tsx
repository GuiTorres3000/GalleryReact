import { tv } from "tailwind-variants";

export const ImagePreviewVariants = tv({
      base: "rounded-lg overflow-hidden"
})

export const ImageVariants = tv({
      base: "w-full h-full object-cover"
})

interface ImagePreviewProps extends React.ComponentProps<"img">{
      imageClassname?: string;
}

export default function ImagePreview({ className, imageClassname, ...props }: ImagePreviewProps) {
      return (
            <div className={ImagePreviewVariants(className)}>
                  <img className={ImageVariants({className: imageClassname})} {...props} />
            </div>
      );
}