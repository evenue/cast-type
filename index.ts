export default function castType<ResultType>(anyValue: unknown): ResultType {
    return anyValue as ResultType;
}
