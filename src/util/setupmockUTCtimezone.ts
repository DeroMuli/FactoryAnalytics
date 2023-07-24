import { register, unregister } from "timezone-mock";

export const setupMockUTCtimezone = () => {
  register("Etc/GMT");
  afterAll(() => {
    unregister();
  });
};
