"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeasonSeriesCreateNestedOneWithoutPostsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SeasonSeriesCreateOrConnectWithoutPostsInput_1 = require("../inputs/SeasonSeriesCreateOrConnectWithoutPostsInput");
const SeasonSeriesCreateWithoutPostsInput_1 = require("../inputs/SeasonSeriesCreateWithoutPostsInput");
const SeasonSeriesWhereUniqueInput_1 = require("../inputs/SeasonSeriesWhereUniqueInput");
let SeasonSeriesCreateNestedOneWithoutPostsInput = class SeasonSeriesCreateNestedOneWithoutPostsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateWithoutPostsInput_1.SeasonSeriesCreateWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateWithoutPostsInput_1.SeasonSeriesCreateWithoutPostsInput)
], SeasonSeriesCreateNestedOneWithoutPostsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesCreateOrConnectWithoutPostsInput_1.SeasonSeriesCreateOrConnectWithoutPostsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesCreateOrConnectWithoutPostsInput_1.SeasonSeriesCreateOrConnectWithoutPostsInput)
], SeasonSeriesCreateNestedOneWithoutPostsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SeasonSeriesWhereUniqueInput_1.SeasonSeriesWhereUniqueInput)
], SeasonSeriesCreateNestedOneWithoutPostsInput.prototype, "connect", void 0);
SeasonSeriesCreateNestedOneWithoutPostsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("SeasonSeriesCreateNestedOneWithoutPostsInput", {
        isAbstract: true
    })
], SeasonSeriesCreateNestedOneWithoutPostsInput);
exports.SeasonSeriesCreateNestedOneWithoutPostsInput = SeasonSeriesCreateNestedOneWithoutPostsInput;
