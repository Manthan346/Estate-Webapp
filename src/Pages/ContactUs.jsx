import { useState } from "react";
import { Button } from "../components/ui/button";
import { UserDetails } from "../../api";

export default function ContactPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNum, setPhoneNum] = useState("")
  const [comment, setComment] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
       const response = UserDetails({name,email,phoneNum,comment})
        const result = response.data
    
      
    } catch (error) {
      
    }
   

  }


  return (

    <section className="w-full bg-muted/30 py-16">
      <div className="container mx-auto px-4">
        <div
          className="
            grid grid-cols-1 lg:grid-cols-2
            gap-10
            bg-background
            rounded-2xl
            overflow-hidden
            shadow-lg
          "
        >
          {/* LEFT IMAGE */}
          <div className="hidden lg:block">
            <img
              src="https://www.azobuild.com/images/Article_Images/ImageForArticle_8637_16974450111521649.jpg"
              alt="Contact"
              className="h-full w-full object-cover"
            />
          </div>

          {/* RIGHT FORM */}
          <div className="p-8 lg:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-semibold mb-2">
              Let’s Get In Touch.
            </h2>

            <p className="text-muted-foreground mb-8">
              Or just reach out manually to{" "}
              <a
                href="mailto:hello@example.com"
                className="text-primary underline"
              >
                hello@example.com
              </a>
            </p>

            <form className="space-y-5">
              {/* Name */}
              <div>
                <label className="text-sm font-medium">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  name="email"
                  onChange={(e)=> setName(e.target.value)}
                  className="
                    mt-1 w-full rounded-lg
                    border border-input
                    bg-background px-4 py-2
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    mt-1 w-full rounded-lg
                    border border-input
                    bg-background px-4 py-2
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                  value={email}
                   onChange={(e)=> setEmail(e.target.value)}
                />
              </div>

              {/* Phone */}
              <div>
                <label className="text-sm font-medium">Phone Number</label>
                <input
                  type="number"
                  placeholder="+91 00000 00000"
                  className="
                    mt-1 w-full rounded-lg
                    border border-input
                    bg-background px-4 py-2
                    focus:outline-none focus:ring-2 focus:ring-primary
                  "
                   onChange={(e)=> setPhoneNum(e.target.value)}
                   value={phoneNum}
                   name="phoneNum"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={4}
                  placeholder="Enter your message..."
                  className="
                    mt-1 w-full rounded-lg
                    border border-input
                    bg-background px-4 py-2
                    focus:outline-none focus:ring-2 focus:ring-primary
                    resize-none
                  "
                   onChange={(e)=> setComment(e.target.value)}
                   value={comment}
                   name="comment"
                />
              </div>

              {/* Button */}
              <Button onClick={handleSubmit} size="lg" className="w-full bg-chart-3 hover:bg-chart-2 rounded-full">
                Submit Form →
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
