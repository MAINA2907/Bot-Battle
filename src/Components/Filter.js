function Filter({handleFilterChoose}) {
    return (
      
      <ul class="list-group d-flex flex-row mb-3">
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value="Support"
            id="firstCheckbox"
            onChange={handleFilterChoose}
          />
          <label class="form-check-label" for="firstCheckbox" >
            Support
          </label>
        </li>
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value="Medic"
            id="secondCheckbox"
            onChange={handleFilterChoose}
          />
          <label class="form-check-label" for="secondCheckbox">
            Medic
          </label>
        </li>
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value="Witch"
            id="thirdCheckbox"
            onChange={handleFilterChoose}
          />
          <label class="form-check-label" for="thirdCheckbox">
            Witch
          </label>
        </li>
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value="Assault"
            id="fourthCheckbox"
            onChange={handleFilterChoose}
          />
          <label class="form-check-label" for="fourthCheckbox">
            Assault
          </label>
        </li>
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value="Defender"
            id="fifthhCheckbox"
            onChange={handleFilterChoose}
          />
          <label class="form-check-label" for="fifthCheckbox">
            Defender
          </label>
        </li>
        <li class="list-group-item">
          <input
            class="form-check-input me-1"
            type="checkbox"
            value="Captain"
            id="sixthCheckbox"
            onChange={handleFilterChoose}
          />
          <label class="form-check-label" for="sixthCheckbox">
            Captain
          </label>
        </li>
      </ul>
    );
  }
  export default Filter;
  