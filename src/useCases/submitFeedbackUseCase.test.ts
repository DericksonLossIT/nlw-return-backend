import { SubmitFeedbackUseCase } from "./submitFeedbackUseCase";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
    { create: createFeedbackSpy },
    { sendMail: sendMailSpy }
);

describe("Submit feedback", () => {
    it("should be able to submit a feedback", async () => {

        await expect(
            submitFeedback.execute({
                type: "BUG",
                comment: "Example comment",
                screenshot: "data:image/png;base64askjjndakjndajksd",
            })
        ).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });

    it("should not be able to submit a feedback without a type", async () => {
        await expect(
            submitFeedback.execute({
                type: "",
                comment: "Example comment",
                screenshot: "data:image/png;base64askjjndakjndajksd",
            })
        ).rejects.toThrow();
    });

    it("should not be able to submit a feedback without a comment", async () => {
        await expect(
            submitFeedback.execute({
                type: "BUG",
                comment: "",
                screenshot: "data:image/png;base64askjjndakjndajksd",
            })
        ).rejects.toThrow();
    });

    it("should not be able to submit a feedback with an invalid screenshot", async () => {
        await expect(
            submitFeedback.execute({
                type: "BUG",
                comment: "Tá tudo bugado",
                screenshot: "teste.jpg",
            })
        ).rejects.toThrow();
    });
});
