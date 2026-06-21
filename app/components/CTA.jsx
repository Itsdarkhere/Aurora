import { useFetcher } from "@remix-run/react";

export default function CTA() {
  const fetcher = useFetcher();
  const isLoading = fetcher.state === "submitting";
  const submitted = fetcher.data?.message === "All good, email sent";

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    fetcher.submit(
      {
        email: formData.get("email"),
        message: formData.get("message"),
      },
      {
        method: "POST",
        action: "/api/contact",
        encType: "application/json",
      }
    );
  };

  return (
    <div className="w-full bg-[#F8F8F8] pb-12 lg:py-40 px-4 flex justify-center items-center">
      <div className="max-w-lg mx-auto">
        <div className="bg-theme px-4 py-8 md:p-8 rounded-t-2xl">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <h2 className="text-3xl font-bold text-white">Ota yhteyttä</h2>
          </div>
          <p className="text-center text-white/90">
            Jos jokin vielä mietityttää tai haluat kysyä lisää valmennuksesta,
            ota rohkeasti yhteyttä.
          </p>
        </div>

        <div className="bg-white px-4 py-8 md:p-8 rounded-b-2xl shadow-xl">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Sähköposti
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 text-neutral-700 bg-gray-50 border border-gray-200 rounded-lg"
                  placeholder="esimerkki@sähköposti.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Viesti
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 text-neutral-700 bg-gray-50 border border-gray-200 rounded-lg"
                  placeholder="Viesti..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 bg-theme text-white font-medium rounded-lg relative"
              >
                {isLoading ? (
                  <>
                    <span className="opacity-0">Send Message</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </div>
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          ) : (
            <MessageSent />
          )}
        </div>
      </div>
    </div>
  );
}

function MessageSent() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <img src="/success.svg" alt="Onnistuminen" height={100} width={100} />
      <h6 className="text-lg text-green-600 font-semibold">Viesti lähetetty!</h6>
    </div>
  );
}
