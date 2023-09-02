import Image from "next/image";

interface IEmpty {
  label: string;
}

export default function Empty({ label }: IEmpty) {
  return (
    <div className="mx-auto my-16 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72">
        <Image alt="Empty" fill src="/empty.png" />
      </div>
      <p className="text-muted-foreground text-sm text-center">{label}</p>
    </div>
  );
}