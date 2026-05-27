declare enum PaymentStatus {
    pending = "PENDING",
    success = "SUCCESS",
    failed = "FAILED"
}
declare function checkPayment(status: PaymentStatus): void;
