import { useForm, type SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type FormFields = {
    email: string;
    password: string;
    
};

const onSubmit: SubmitHandler<FormFields> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
};

function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>();

    const hadnleShowPassword = () => setShowPassword((prev) => !prev);

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-tr from-[var(--chart-1)] to-white">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-primary text-card-foreground flex flex-col gap-6 rounded-xl py-6 shadow-sm w-[450px]"
            >
                <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6">
                    <div className="leading-none font-semibold">
                        Přihlaš se
                    </div>
                    <div className="text-muted-foreground text-sm flex gap-2">
                        Nemáš účet?
                        <Link
                            to="/register"
                            className="text-primary-foreground underline"
                        >
                            Registruj se
                        </Link>
                    </div>
                </div>
                <div className="px-6">
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Zadej email",
                                    },
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Neplatná emailová adresa",
                                    },
                                })}
                                id="email"
                                placeholder="example@email.com"
                                className="bg-primary-foreground text-black"
                            />
                            {errors.email && (
                                <p className="text-red-500">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="password">Heslo</Label>
                            <div className="relative">
                                <div className="relative">
                                    <Input
                                        {...register("password", {
                                            required: {
                                                value: true,
                                                message: "Zadej heslo",
                                            }
                                        })}
                                        id="password"
                                        placeholder="Zadej heslo"
                                        type={showPassword ? "text" : "password"}
                                        className="bg-primary-foreground pr-20 text-black"
                                    />
                                    <button
                                        type="button"
                                        onClick={hadnleShowPassword}
                                        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground text-sm hover:text-background transition-colors cursor-pointer"
                                    >
                                        {showPassword ? "Skrýt" : "Zobrazit"}
                                    </button>
                                </div>
                                {errors.password && (
                                    <p className="text-red-500">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex justify-end pt-3">

                            <Button
                                variant="secondary"
                                className="font-bold cursor-pointer w-[150px]"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "..." : "Přihlásit se"}
                            </Button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
