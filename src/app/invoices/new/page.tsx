import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { CreateAction } from "@/app/actions";




export default async function Home() {


    return (
        <main className="flex flex-col justify-center h-full gap-6 max-w-5xl mx-auto my-12">
            <div className="flex justify-between">
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
                    <Button type="submit" className="w-full font-semibold">Create Invoice</Button>
                </div>
            </form>

        </main>
    );
}