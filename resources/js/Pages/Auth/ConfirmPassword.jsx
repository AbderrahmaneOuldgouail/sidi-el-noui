import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, useForm } from '@inertiajs/react';
import { Input } from '@/Components/ui/input';
import { Button } from '@/Components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { useTrans } from '@/Hooks/useTrans';

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('password.confirm'));
    };

    return (
        <GuestLayout>
            <Head title="Confirm Password" />

            <div className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {useTrans(
                    "Il s'agit d'une zone sécurisée de l'application. Veuillez confirmer votre mot de passe avant de continuer."
                )}
            </div>

            <form onSubmit={submit}>
                <div className="mt-4">
                    <InputLabel htmlFor="password" value={useTrans("Mot de passe")} />

                    <Input
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        isFocused={true}
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Button className="ms-4" variant="secondary" size="sm">
                        {processing ? (
                            <LoaderCircle className="animate-spin" />
                        ) : (
                            useTrans(
                                "Confirmer"
                            )
                        )}
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
