"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CryptoJS = require('crypto-js');
var AesUtil = (function () {
    function AesUtil(keySize, iterationCount) {
        this.generateKey = function (salt, passPhrase) {
            var key = CryptoJS.PBKDF2(passPhrase, CryptoJS.enc.Hex.parse(salt), { keySize: this.keySize, iterations: this.iterationCount });
            return key;
        };
        this.encrypt = function (salt, iv, passPhrase, plainText) {
            var key = this.generateKey(salt, passPhrase);
            var encrypted = CryptoJS.AES.encrypt(plainText, key, { iv: CryptoJS.enc.Hex.parse(iv) });
            return encrypted.ciphertext.toString(CryptoJS.enc.Base64);
        };
        this.decrypt = function (salt, iv, passPhrase, cipherText) {
            var key = this.generateKey(salt, passPhrase);
            var cipherParams = CryptoJS.lib.CipherParams.create({
                ciphertext: CryptoJS.enc.Base64.parse(cipherText)
            });
            var decrypted = CryptoJS.AES.decrypt(cipherParams, key, { iv: CryptoJS.enc.Hex.parse(iv) });
            return decrypted.toString(CryptoJS.enc.Utf8);
        };
        this.keySize = keySize / 32;
        this.iterationCount = iterationCount;
    }
    return AesUtil;
}());
exports.AesUtil = AesUtil;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWVzVXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkFlc1V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUE7QUFFbkM7SUFLRSxpQkFBWSxPQUFPLEVBQUUsY0FBYztRQU9uQyxnQkFBVyxHQUFHLFVBQVUsSUFBSSxFQUFFLFVBQVU7WUFDdEMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FDdkIsVUFBVSxFQUNWLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFDNUIsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7WUFDOUQsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQTtRQUVELFlBQU8sR0FBRyxVQUFVLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVM7WUFDakQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDN0MsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQ2xDLFNBQVMsRUFDVCxHQUFHLEVBQ0gsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUE7UUFFRCxZQUFPLEdBQUcsVUFBVSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxVQUFVO1lBQ2xELElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQzdDLElBQUksWUFBWSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztnQkFDbEQsVUFBVSxFQUFFLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDbEQsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQ2xDLFlBQVksRUFDWixHQUFHLEVBQ0gsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN0QyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9DLENBQUMsQ0FBQTtRQWpDQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdkMsQ0FBQztJQWdDSCxjQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQztBQXhDWSwwQkFBTyIsInNvdXJjZXNDb250ZW50IjpbIlxudmFyIENyeXB0b0pTID0gcmVxdWlyZSgnY3J5cHRvLWpzJylcblxuZXhwb3J0IGNsYXNzIEFlc1V0aWwgeyAgXG5cbiAga2V5U2l6ZTogbnVtYmVyO1xuICBpdGVyYXRpb25Db3VudDogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKGtleVNpemUsIGl0ZXJhdGlvbkNvdW50KSB7XG4gICAgdGhpcy5rZXlTaXplID0ga2V5U2l6ZSAvIDMyO1xuICAgIHRoaXMuaXRlcmF0aW9uQ291bnQgPSBpdGVyYXRpb25Db3VudDtcbiAgfVxuXG5cblxuICBnZW5lcmF0ZUtleSA9IGZ1bmN0aW9uIChzYWx0LCBwYXNzUGhyYXNlKSB7XG4gICAgdmFyIGtleSA9IENyeXB0b0pTLlBCS0RGMihcbiAgICAgIHBhc3NQaHJhc2UsXG4gICAgICBDcnlwdG9KUy5lbmMuSGV4LnBhcnNlKHNhbHQpLFxuICAgICAgeyBrZXlTaXplOiB0aGlzLmtleVNpemUsIGl0ZXJhdGlvbnM6IHRoaXMuaXRlcmF0aW9uQ291bnQgfSk7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG4gIGVuY3J5cHQgPSBmdW5jdGlvbiAoc2FsdCwgaXYsIHBhc3NQaHJhc2UsIHBsYWluVGV4dCkge1xuICAgIHZhciBrZXkgPSB0aGlzLmdlbmVyYXRlS2V5KHNhbHQsIHBhc3NQaHJhc2UpO1xuICAgIHZhciBlbmNyeXB0ZWQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChcbiAgICAgIHBsYWluVGV4dCxcbiAgICAgIGtleSxcbiAgICAgIHsgaXY6IENyeXB0b0pTLmVuYy5IZXgucGFyc2UoaXYpIH0pO1xuICAgIHJldHVybiBlbmNyeXB0ZWQuY2lwaGVydGV4dC50b1N0cmluZyhDcnlwdG9KUy5lbmMuQmFzZTY0KTtcbiAgfVxuXG4gIGRlY3J5cHQgPSBmdW5jdGlvbiAoc2FsdCwgaXYsIHBhc3NQaHJhc2UsIGNpcGhlclRleHQpIHtcbiAgICB2YXIga2V5ID0gdGhpcy5nZW5lcmF0ZUtleShzYWx0LCBwYXNzUGhyYXNlKTtcbiAgICB2YXIgY2lwaGVyUGFyYW1zID0gQ3J5cHRvSlMubGliLkNpcGhlclBhcmFtcy5jcmVhdGUoe1xuICAgICAgY2lwaGVydGV4dDogQ3J5cHRvSlMuZW5jLkJhc2U2NC5wYXJzZShjaXBoZXJUZXh0KVxuICAgIH0pO1xuICAgIHZhciBkZWNyeXB0ZWQgPSBDcnlwdG9KUy5BRVMuZGVjcnlwdChcbiAgICAgIGNpcGhlclBhcmFtcyxcbiAgICAgIGtleSxcbiAgICAgIHsgaXY6IENyeXB0b0pTLmVuYy5IZXgucGFyc2UoaXYpIH0pO1xuICAgIHJldHVybiBkZWNyeXB0ZWQudG9TdHJpbmcoQ3J5cHRvSlMuZW5jLlV0ZjgpO1xuICB9XG59Il19