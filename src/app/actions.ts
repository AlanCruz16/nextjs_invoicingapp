"use server";

export async function CreateAction(formData: FormData) {
    const value = Math.floor(parseFloat(String(formData.get("value"))) * 100);
    console.log(value);

}