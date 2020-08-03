import React from "react";
import { compose } from "recompose";

import { withAuthorization } from "../Session";
import VenueInfoForm from "../Forms/VenueInfoForm";

const HomePage = () => <VenueInfoForm />;

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(HomePage);
