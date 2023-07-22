import Image from "next/image";

const Loader = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="relative h-10 w-10 animate-spin">
        <Image
          fill
          alt="logo"
          src="/images/logo.png"
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Genius is thinking...
      </p>
    </div>
  );
};

export default Loader;