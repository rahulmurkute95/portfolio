function SkillCard({ skill }) {
  return (
    <div className="bg-slate-800 rounded-2xl p-5 hover:scale-105 transition-all duration-300 border border-slate-700">

     <div className="flex justify-center">
  {skill.icon}
</div>

      <h3 className="text-center text-xl font-semibold mt-4">
        {skill.name}
      </h3>

      <div className="mt-4 bg-slate-700 rounded-full h-3">

        <div
          className={`bg-gradient-to-r ${skill.color} h-3 rounded-full`}
          style={{ width: `${skill.percentage}%` }}
        />

      </div>

      <p className="text-center mt-2 text-cyan-400">
        {skill.percentage}%
      </p>

    </div>
  );
}

export default SkillCard;