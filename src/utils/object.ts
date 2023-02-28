export function isEmpty(n: any) {
  return !(!!n
    ? typeof n === "object"
      ? Array.isArray(n)
        ? !!n.length
        : !!Object.keys(n).length
      : true
    : false);
}

export function assign(val1: any, val2: any) {
  return Object.assign(val1, val2);
}

export function changeParams(
  location: any,
  nameParam: string,
  valueParam: any,
  isReset: boolean
) {
  let locationParam = location.search,
    result = "";
  if (!isReset) {
    let isInclude = false;
    let arr = locationParam.replace("?", "").split("&");
    let brr = arr.map((item: any) => {
      if (item.includes(nameParam)) {
        isInclude = true;
        return `${nameParam}=${valueParam}`;
      }
      return item;
    });

    if (!isInclude) {
      brr.push(`${nameParam}=${valueParam}`);
    }
    result = `${location.pathname}?${brr.join("&")}`;
  } else {
    result = `${location.pathname}?${nameParam}=${valueParam}`;
  }
  return result.toLowerCase();
}

export function parseItem(dataFilter: any) {
  const arr = [];
  for (let x in dataFilter) {
    if (dataFilter[x] && dataFilter[x] !== "All") {
      arr.push(`${x}=${dataFilter[x]}`);
    }
  }
  return arr.join("&").toLowerCase();
}

export function removeParam(
  location: any,
  nameParam: string,
  valueParam: any
) {}
