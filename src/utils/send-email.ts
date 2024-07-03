import { FormProps } from "@/components/Contact";

export function sendEmail(data: FormProps) {
    const apiEndpoint = "/api/email";

    console.log(data);

    fetch(apiEndpoint, {
        method: "POST",
        body: JSON.stringify(data),
    })

    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}