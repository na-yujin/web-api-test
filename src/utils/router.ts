import { NextRouter } from "next/router";

export const TEST_PAGE_KEY = "/test" as const;

export const MAIN_PAGE = "/" as const;
export const TEST_PAGE = `${TEST_PAGE_KEY}/:id` as const;

// 파라미터 값이 존재하는 router path type
type HAS_PARAMS_PAGE_TYPES = typeof TEST_PAGE;

// 파라미터 값이 존재하지 않는 router path type
type NORMALLY_PAGE_TYPES = typeof MAIN_PAGE;

export type PAGE_TYPES = HAS_PARAMS_PAGE_TYPES | NORMALLY_PAGE_TYPES;

export type PAGE_PARAMS = {
  [TEST_PAGE]: {
    id: string;
  };
};

type getRouterPathType<T extends PAGE_TYPES> = T extends HAS_PARAMS_PAGE_TYPES
  ? [url: T, params: PAGE_PARAMS[T]]
  : [url: T];

export function getRouterPath<T extends PAGE_TYPES>(
  ...args: getRouterPathType<T>
) {
  const [url, params] = args;

  if (!params) {
    return url;
  }

  const splitUrl = url.split("/");

  const parsedParamUrlArray = splitUrl.map((urlBlock) => {
    if (!urlBlock.startsWith(":")) {
      return urlBlock;
    }

    const paramKey = urlBlock.split(":")[1] as keyof typeof params;

    return params[paramKey];
  });

  return parsedParamUrlArray.join("/");
}

export const getPath = (asPath: string) => {
  const paths = asPath
    .split("/")
    .filter((value) => value !== "" && value !== "#");

  return {
    paths,
    length: paths.length,
  };
};

export const getPathString = (asPath: string) => {
  return asPath.split("?")[0].split("#")[0];
};

export const getRouterQuery = <T extends {}>(router: NextRouter) => {
  return router.query as T;
};
