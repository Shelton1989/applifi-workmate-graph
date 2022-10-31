"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesUpsertWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateWithoutPostsInput_1 = require("../inputs/SeasonSeriesCreateWithoutPostsInput");
const SeasonSeriesUpdateWithoutPostsInput_1 = require("../inputs/SeasonSeriesUpdateWithoutPostsInput");
let SeasonSeriesUpsertWithoutPostsInput = class SeasonSeriesUpsertWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesUpdateWithoutPostsInput_1.SeasonSeriesUpdateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesUpdateWithoutPostsInput_1.SeasonSeriesUpdateWithoutPostsInput)
], SeasonSeriesUpsertWithoutPostsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutPostsInput_1.SeasonSeriesCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutPostsInput_1.SeasonSeriesCreateWithoutPostsInput)
], SeasonSeriesUpsertWithoutPostsInput.prototype, "create", void 0);
SeasonSeriesUpsertWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesUpsertWithoutPostsInput", {
        isAbstract: true
    })
], SeasonSeriesUpsertWithoutPostsInput);
exports.SeasonSeriesUpsertWithoutPostsInput = SeasonSeriesUpsertWithoutPostsInput;
