import React from "react";

export default function ContactForm() {
  return (
    <div className="pt-[1rem] pb-[5rem]">
      <div className="container bg-[#F6F3ED] p-[2.625rem] rounded-[24px]">
        <div className="max-w-[35.688rem] mx-auto">
          <div>
            <h4 className="font-clash text-[2.5rem] font-medium">Write to us</h4>
            <p className="text-[#475467] text-[0.918rem]">
              We&apos;re here to help! If you have questions, comments, or just want to connect,
              feel free to reach out on any of these categories.
            </p>
          </div>
          <div>
            <div className="mt-8 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstname" className="block text-[#344054] mb-1.5">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="firstname"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-[#D0D5DD]"
                  />
                </div>
                <div>
                  <label htmlFor="lastname" className="block text-[#344054] mb-1.5">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="lastname"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-[#D0D5DD]"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-[#344054] mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="email"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-[#D0D5DD]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-[#344054] mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="+1 850-961-2701"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-[#D0D5DD]"
                />
              </div>

              <div>
                <label className="block text-[#344054] mb-1.5">
                  Select Category
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {['Senior Care', 'Provider Services', 'Donation', 'Assisted Living', 'Doctor Services', 'Others'].map((category) => (
                    <button
                      key={category}
                      className="text-[#595959] text-[1rem] px-4 py-2.5 rounded-full border border-[#D0D5DD] bg-white hover:bg-[#D0D5DD]/10 focus:outline-none focus:ring-2 focus:ring-[#D0D5DD]"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-[#344054] mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Add any additional message"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D0D5DD] focus:outline-none focus:ring-2 focus:ring-[#D0D5DD]"
                />
              </div>
              <button className="w-full bg-[#B08D57] text-white py-3 rounded-[1.664rem] hover:bg-[#B08D57]/90 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
