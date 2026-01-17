"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default  function AddPostForm() {
  const [formData, setFormData] = useState({
    title: "",
    thumbnailUrl: "",
    description: "",
    category: "",
  });
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const loggedIn = document.cookie.includes("loggedIn=true");
    if (loggedIn) {
      setAuthorized(true)
    } else {
      router.push("/login");
    }
  }, [router]);

  const  handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const thumbnailUrl = form.thumbnailUrl.value;
    const description = form.description.value;
    const price = form.price.value;
    const date = new Date().toDateString();
    const formData = {
      userName: "Demo user",
      title,
      thumbnailUrl,
      description,
      price,
      date
    }
    const res = await fetch('/api/posts',{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    if (res.ok){
      alert("Product Added successFully");
    }
    else{
      alert("Something went wrong")
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6 bg-base-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-base-100 shadow-xl rounded-xl p-8 space-y-6 border border-base-300"
      >
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Add Product
        </h2>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter product name"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Product Price</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enter product price"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Thumbnail URL</span>
          </label>
          <input
            type="url"
            name="thumbnailUrl"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Write your description..."
            className="textarea textarea-bordered w-full focus:outline-none focus:ring-2 focus:ring-primary/80 focus:border-primary resize-none"
            rows={5}
            required
          ></textarea>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="btn btn-primary w-full transition-colors duration-300 hover:bg-primary-focus"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
