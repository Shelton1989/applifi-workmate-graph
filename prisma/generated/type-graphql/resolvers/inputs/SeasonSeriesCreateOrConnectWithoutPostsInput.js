"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateOrConnectWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateWithoutPostsInput_1 = require("../inputs/SeasonSeriesCreateWithoutPostsInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesCreateOrConnectWithoutPostsInput = class SeasonSeriesCreateOrConnectWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesCreateOrConnectWithoutPostsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutPostsInput_1.SeasonSeriesCreateWithoutPostsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutPostsInput_1.SeasonSeriesCreateWithoutPostsInput)
], SeasonSeriesCreateOrConnectWithoutPostsInput.prototype, "create", void 0);
SeasonSeriesCreateOrConnectWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateOrConnectWithoutPostsInput", {
        isAbstract: true
    })
], SeasonSeriesCreateOrConnectWithoutPostsInput);
exports.SeasonSeriesCreateOrConnectWithoutPostsInput = SeasonSeriesCreateOrConnectWithoutPostsInput;
