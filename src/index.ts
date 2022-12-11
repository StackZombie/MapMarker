/// <reference types="@types/google.maps" />

import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap('map');
const user = new User();

customMap.addMarker(user);

const company = new Company();
customMap.addMarker(company);
