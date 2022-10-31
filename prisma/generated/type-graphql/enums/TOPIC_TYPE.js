"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TOPIC_TYPE = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var TOPIC_TYPE;
(function (TOPIC_TYPE) {
    TOPIC_TYPE["MOVIE"] = "MOVIE";
    TOPIC_TYPE["SERIES"] = "SERIES";
    TOPIC_TYPE["DOCUMENTARY"] = "DOCUMENTARY";
    TOPIC_TYPE["STREAMING_PLATFORM"] = "STREAMING_PLATFORM";
    TOPIC_TYPE["OPINION_PIECE"] = "OPINION_PIECE";
    TOPIC_TYPE["NEWS_ENTITY"] = "NEWS_ENTITY";
    TOPIC_TYPE["ARTICLE"] = "ARTICLE";
    TOPIC_TYPE["PODCAST"] = "PODCAST";
    TOPIC_TYPE["BOOK"] = "BOOK";
})(TOPIC_TYPE = exports.TOPIC_TYPE || (exports.TOPIC_TYPE = {}));
TypeGraphQL.registerEnumType(TOPIC_TYPE, {
    name: "TOPIC_TYPE",
    description: undefined,
});
