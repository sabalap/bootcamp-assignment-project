import Pagination from "../../Pagination/Pagination";

const TechnicalSkillset = () => {
  return (
    <section>
      <h1>Tell us about your skills</h1>
      <form>
        <select name="skills" id="skills">
          <option value=""></option>
          <option value=""></option>
          <option value=""></option>
        </select>
        <input type="text" placeholder="Experience Duration in Years" />
      </form>
      <Pagination />
    </section>
  );
};
export default TechnicalSkillset;
