"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateNestedOneWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateOrConnectWithoutSeasonSeriesInput_1 = require("../inputs/TopicCreateOrConnectWithoutSeasonSeriesInput");
const TopicCreateWithoutSeasonSeriesInput_1 = require("../inputs/TopicCreateWithoutSeasonSeriesInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicCreateNestedOneWithoutSeasonSeriesInput = class TopicCreateNestedOneWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutSeasonSeriesInput_1.TopicCreateWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutSeasonSeriesInput_1.TopicCreateWithoutSeasonSeriesInput)
], TopicCreateNestedOneWithoutSeasonSeriesInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateOrConnectWithoutSeasonSeriesInput_1.TopicCreateOrConnectWithoutSeasonSeriesInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicCreateOrConnectWithoutSeasonSeriesInput_1.TopicCreateOrConnectWithoutSeasonSeriesInput)
], TopicCreateNestedOneWithoutSeasonSeriesInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], TopicCreateNestedOneWithoutSeasonSeriesInput.prototype, "connect", void 0);
TopicCreateNestedOneWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateNestedOneWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], TopicCreateNestedOneWithoutSeasonSeriesInput);
exports.TopicCreateNestedOneWithoutSeasonSeriesInput = TopicCreateNestedOneWithoutSeasonSeriesInput;
