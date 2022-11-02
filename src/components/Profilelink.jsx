import React from "react";

const Profilelink = () => {
  return (
    <div className="profilelink mt-5">
      <div class="d-grid gap-3">
        <button
          onClick={() => {
            window.location.href = "https://twitter.com/Dhestiny144";
          }}
          class="btn btn-lg btn-primary"
          type="button"
        >
          Twitter Link
        </button>
        <button
          onClick={() => {
            window.location.href = "https://training.zuri.team";
          }}
          class="btn btn-lg btn-primary"
          type="button"
          id="btn_zuri"
        >
          Zuri Team
        </button>
        <button
          onClick={() => {
            window.location.href = "https://books.zuri.team/";
          }}
          class="btn btn-lg btn-primary"
          id="books"
          type="button"
        >
          Zuri Books
        </button>{" "}
        <button
          onClick={() => {
            window.location.href =
              "https://books.zuri.team/pythonforbeginners?ref_id=ige ajibola";
          }}
          class="btn btn-lg btn-primary"
          id="book_python"
          type="button"
        >
          Python Books
        </button>{" "}
        <button
          onClick={() => {
            window.location.href = "https://background.zuri.team/";
          }}
          class="btn btn-lg btn-primary"
          id="pitch"
          type="button"
        >
          Background Check for Coders
        </button>{" "}
        <button
          onClick={() => {
            window.location.href = "https://books.zuri.team/design-rules";
          }}
          class="btn btn-lg btn-primary"
          id="book_design"
          type="button"
        >
          Design Books
        </button>
      </div>
    </div>
  );
};

export default Profilelink;
