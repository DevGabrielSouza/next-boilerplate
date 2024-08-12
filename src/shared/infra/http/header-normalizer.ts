export class HeaderNormalizer {
  static normalize(
    headers: Record<string, any>
  ): Record<string, string | string[]> {
    return Object.keys(headers).reduce(
      (normalizedHeaders, key) => {
        const value = headers[key]

        normalizedHeaders[key] = HeaderNormalizer.normalizeValue(value)
        return normalizedHeaders
      },
      {} as Record<string, string | string[]>
    )
  }

  private static normalizeValue(value: any): string | string[] {
    if (Array.isArray(value)) {
      return value.map(String)
    }
    return String(value)
  }
}
