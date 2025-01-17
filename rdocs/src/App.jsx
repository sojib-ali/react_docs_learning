// import "./App.css";
import { Home } from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./pages/Nav";
import TaskApp from "../prev/Todos";
import Messenger from "../prev/Rmessenger";
import Co_page from "../prev/Co_page";
import NextGallery from "./topics/AddInteractivity/Lesson_2/NextGallery";
import Input_form from "./topics/AddInteractivity/Lesson_2/Input_form";
import TextArea_fix from "./topics/AddInteractivity/Lesson_2/TextArea_fix";
import AlertInput from "./topics/AddInteractivity/Lesson_2/AlertInput";
import Clock_3 from "./topics/AddInteractivity/Lesson_3/Time";
import SelectForm from "./topics/AddInteractivity/Lesson_4/SelectForm";
import SignalColor from "./topics/AddInteractivity/Lesson_4/SignalColor";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task-app" element={<TaskApp />} />
        <Route path="/messenger-with-reducer" element={<Messenger />} />
        <Route path="/context-image-list" element={<Co_page />} />
        <Route path="/next-gallery" element={<NextGallery />} />
        <Route path="/input-form" element={<Input_form />} />
        <Route path="/textarea-msg" element={<TextArea_fix />} />
        <Route path="/alert-input" element={<AlertInput />} />
        <Route path="/current-time" element={<Clock_3 />} />
        <Route path="/select-form" element={<SelectForm />} />
        <Route path="/signal-color" element={<SignalColor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
