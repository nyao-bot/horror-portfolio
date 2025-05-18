export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-black text-gray-200 py-20 px-6 md:px-20 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-6 tracking-wider">
          闇の住人について
        </h2>

        <div className="relative group transition-all duration-500">
          <p className="text-lg leading-relaxed group-hover:text-red-600 transition-colors duration-300">
            名前はまだない。
            <br />
            コードを書くことで、自我を保っている。
            <br />
            日が沈むとキーボードの音が止まらない…
            <br />
            主にフロントエンド、時々バックエンド、そしてたまに深淵。
          </p>

          <div className="mt-8 flex justify-center">
            <img
              src="/profile-dark.png"
              alt="闇の住人"
              className="w-32 h-32 rounded-full grayscale opacity-30 group-hover:opacity-70 transition duration-500 border-2 border-red-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
