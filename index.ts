/*
 * Vencord, a Discord client mod
 * Copyright (c) 2025 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import definePlugin from "@utils/types";

export default definePlugin({
    name: "Disable Compression",
    description: "Disables the compression of attachments.",
    authors: [{ id: 566409342161780747n, name: "zv_yz" }],

    patches: [
        {
            find: "maybeConvertToWebP",
            replacement: {
                match: /maybeConvertToWebP\([^\)]*\)/,
                replace: "return;"
            }
        }
    ]
});
