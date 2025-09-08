import Button from "../components/button";
import ButtonIcon from "../components/buttonIcon";
import ChevronLeftIcon from "../assets/icons/chevron-left.svg?react";
import ChevronRightIcon from "../assets/icons/chevron-right.svg?react";
import Badge from "../components/badge";
import Alert from "../components/alert";
import Divider from "../components/divider";
import InputText from "../components/inputText";
import InputCheckbox from "../components/inputCheckbox";
import InputSingleFile from "../components/inputSingleFile";
import SearchIcon from "../assets/icons/search.svg?react";
import { useForm } from "react-hook-form";
import ImageFilePreview from "../components/imageFilePreview";
import { Dialog, DialogClose, DialogTrigger } from "@radix-ui/react-dialog";
import { DialogBody, DialogContent, DialogFooter, DialogHeader } from "../components/dialog";

export default function Layout() {
	const form = useForm();
	const file = form.watch("file");
	const fileSrc = file?.[0] ? URL.createObjectURL(file[0]) : undefined;

	return (
		<div className="grid gap-7 p-6">
			<div className="flex gap-3">
				<Button>Button</Button>
				<Button variant="secondary">Button</Button>
				<Button disabled>Button</Button>
				<Button handling>Loading</Button>
				<Button icon={ChevronRightIcon}>Próxima Imagem</Button>
				<Button variant="ghost" size="sm">
					Button
				</Button>
				<Button variant="primary" size="sm">
					Button
				</Button>
			</div>

			<div className="flex gap-3">
				<ButtonIcon icon={ChevronLeftIcon} />
				<ButtonIcon icon={ChevronRightIcon} variant="secondary" />
			</div>

			<div className="flex gap-3">
				<Badge>Todos</Badge>
				<Badge>Natureza</Badge>
				<Badge>Viagem</Badge>
				<Badge loading>Viagem</Badge>
				<Badge loading>Viagem</Badge>
				<Badge loading>Viagem</Badge>
			</div>

			<div>
				<Alert>
					Tamanho máximo: 50MB
					<br />
					Você pode selecionar arquivos em PNG, JPG, JPEG ou WEBP
				</Alert>
			</div>

			<div>
				<Divider />
			</div>

			<div>
				<InputText icon={SearchIcon} placeholder="Buscar Foto" />
			</div>
			<div>
				<InputCheckbox />
			</div>

			<div>
				<Dialog>
					<DialogTrigger asChild>
						<Button>Abrir Modal</Button>
					</DialogTrigger>
					<DialogContent>
						<DialogHeader>
							Titulo
						</DialogHeader>
						<DialogBody>
							<div className="mb-4">
								<Alert>
									Tamanho máximo: 50MB
									<br />
									Você pode selecionar arquivos em PNG, JPG, JPEG ou WEBP
								</Alert>
							</div>

							<div>
								<InputSingleFile form={form}
									allowedExtensions={["png", "jpg", "jpeg", "webp"]}
									maxFileSizeinMB={20}
									replaceBy={<ImageFilePreview src={fileSrc} alt="Imagem" />}
									{...form.register('file')} />
							</div>

						</DialogBody>
						<DialogFooter>
							<DialogClose asChild>
								<Button variant="secondary">Cancelar</Button>
							</ DialogClose>
							<Button variant="primary">Adicionar</Button>

						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
		</div>
	);
}
