/**
 * Takes a size in bytes and converts it to the correct multiples of bytes and appends the right unit
 *
 * @param {number} [size=0] Filesize in Bytes
 * @param {boolean} [useMiB=false] If true, uses a base of 1024 (KB, GB...) instead of 1000 (KiB, GiB...)
 * @returns String Size as string
 */
function hb(size = 0, useMiB = false) {
    if (typeof size !== "number") throw new Error("Invalid size");

    const unit = [
        ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
        ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    ][useMiB ? 0 : 1];

    const base = useMiB ? 1024 : 1000;
    let c = 0;
    do {
        size /= base;
        c++;
        if (size < base || c >= unit.length - 1) {
            break;
        }
    } while (size > base);

    return String(Math.floor(Math.round((size * 100))) / 100 + unit[c]);
}

/**
 * Tries to assign the module for nodejs and if it fails, attach it to global scope
 */
(function () {
    try {
        module.exports = hb;
    } catch (e) {
        window.happybytes = hb;
    }
})();