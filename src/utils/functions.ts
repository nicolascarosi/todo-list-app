export const groupBy = (x: any, f: any) =>
  x.reduce(
    (a: any, b: any, i: number) => ((a[f(b, i, x)] ||= []).push(b), a),
    {}
  );
