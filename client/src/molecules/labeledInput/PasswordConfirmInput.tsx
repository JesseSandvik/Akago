import { Dispatch, useState } from "react";
import { handleGenericOnChange } from "../../utils/state/form";

import Icon from "../../atoms/icon/Icon";
import LabeledInput from "./LabeledInput";

type ConfirmPasswordInputProps = {
  confirmPassword: string;
  password: string;
  confirmPasswordIsValid: boolean;
  setConfirmPassword: Dispatch<React.SetStateAction<string>>;
  setConfirmPasswordIsValid: Dispatch<React.SetStateAction<boolean>>;
};

const PasswordConfirmInput = ({
  confirmPassword,
  confirmPasswordIsValid,
  setConfirmPassword,
}: ConfirmPasswordInputProps): JSX.Element => {
  const [confirmPasswordIsFocus, setConfirmPasswordIsFocus] =
    useState<boolean>(false);

  return (
    <>
      <LabeledInput
        aria-describedby="confirmpasswordnote"
        aria-invalid={confirmPasswordIsValid ? "false" : "true"}
        className="input-user-credentials"
        inputId="confirm_password"
        label="confirm password:"
        name="confirm_password"
        onBlur={() => setConfirmPasswordIsFocus(false)}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleGenericOnChange(event, setConfirmPassword)
        }
        onFocus={() => setConfirmPasswordIsFocus(true)}
        required
        type="password"
        value={confirmPassword || ""}
      />
      <div className="input-status">
        <Icon
          className={
            confirmPasswordIsValid && confirmPassword ? "success" : "hide"
          }
          type="checkmark"
        />
        <Icon
          className={
            confirmPasswordIsValid || !confirmPassword ? "hide" : "alert"
          }
          type="x-mark"
        />
      </div>
      <p
        id="confirmpasswordnote"
        className={
          confirmPasswordIsFocus && !confirmPasswordIsValid
            ? "instructions"
            : "offscreen"
        }
      >
        <Icon type="info" />
        Must match the password from the above input field.
      </p>
    </>
  );
};

export default PasswordConfirmInput;