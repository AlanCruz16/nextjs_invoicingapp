"use client"

import { SyntheticEvent, useState, startTransition } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CreateAction } from "@/app/actions";
import SubmitButton from "@/components/ui/SubmitButton"
import Container from "@/components/Container"





export default function Home() {

    const [state, setState] = useState("ready");

    // async function handleOnSubmit(event: SyntheticEvent) {
    //     event.preventDefault();
    //     if (state === "submitting") {
    //         return;
    //     }
    //     setState("submitting");
    //     const target = event.target as HTMLFormElement;

    //     startTransition(async () => {
    //         const formData = new FormData(target);
    //         await CreateAction(formData);

    //     });
    // }


    return (
        <main className="h-full">
            <Container>
                <div className="flex justify-between mb-6">
                    <h1 className="text-3xl font-semibold ">Create Invoice</h1>
                </div>

                <form action={CreateAction} className="grid gap-4 max-w-xs">
                    <div>
                        <Label htmlFor="name" className="block font-semibold text-sm mb-2">Billing Name</Label>
                        <Input id="name" name="name"></Input>
                    </div>
                    <div>
                        <Label htmlFor="email" className="block font-semibold text-sm mb-2">Billing Email</Label>
                        <Input id="email" name="email"></Input>
                    </div>
                    <div>
                        <Label htmlFor="value" className="block font-semibold text-sm mb-2">Value</Label>
                        <Input id="value" name="value"></Input>
                    </div>
                    <div>
                        <Label htmlFor="description" className="block font-semibold text-sm mb-2">Description</Label>
                        <Textarea id="description" name="description"></Textarea>
                    </div>
                    <div>
                        <SubmitButton />
                    </div>
                </form>
            </Container>
        </main>
    );
}