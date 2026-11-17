export interface FormatRupiahOptions {
  withPrefix?: boolean;
  compact?: boolean;
}

/**
 * Memformat angka nominal menjadi format mata uang Rupiah Indonesia (IDR).
 * Contoh: 2500000 -> "Rp 2.500.000" atau dengan compact -> "Rp 2,5 Jt"
 */
export function formatRupiah(
  amount: number,
  options: FormatRupiahOptions = {},
): string {
  const { withPrefix = true, compact = false } = options;

  if (!Number.isFinite(amount)) {
    return withPrefix ? 'Rp 0' : '0';
  }

  const isNegative = amount < 0;
  const absAmount = Math.abs(amount);

  if (compact) {
    let formattedCompact: string;
    if (absAmount >= 1_000_000_000) {
      formattedCompact = `${(absAmount / 1_000_000_000).toLocaleString('id-ID', {
        maximumFractionDigits: 1,
      })} M`;
    } else if (absAmount >= 1_000_000) {
      formattedCompact = `${(absAmount / 1_000_000).toLocaleString('id-ID', {
        maximumFractionDigits: 1,
      })} Jt`;
    } else if (absAmount >= 1_000) {
      formattedCompact = `${(absAmount / 1_000).toLocaleString('id-ID', {
        maximumFractionDigits: 0,
      })} Rb`;
    } else {
      formattedCompact = absAmount.toLocaleString('id-ID');
    }

    const prefix = withPrefix ? 'Rp ' : '';
    return `${isNegative ? '-' : ''}${prefix}${formattedCompact}`;
  }

  const formattedNumber = Math.round(absAmount).toLocaleString('id-ID');
  const prefix = withPrefix ? 'Rp ' : '';
  return `${isNegative ? '-' : ''}${prefix}${formattedNumber}`;
}

/**
 * Memformat rentang nominal biaya dalam Rupiah.
 * Contoh: (350000, 500000) -> "Rp 350.000 - Rp 500.000"
 */
export function formatRupiahRange(minAmount: number, maxAmount: number): string {
  if (minAmount === maxAmount) {
    return formatRupiah(minAmount);
  }
  return `${formatRupiah(minAmount)} - ${formatRupiah(maxAmount)}`;
}
