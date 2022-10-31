"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopicCreateOrConnectWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TopicCreateWithoutSeasonSeriesInput_1 = require("../inputs/TopicCreateWithoutSeasonSeriesInput");
const TopicWhereUniqueInput_1 = require("../inputs/TopicWhereUniqueInput");
let TopicCreateOrConnectWithoutSeasonSeriesInput = class TopicCreateOrConnectWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicWhereUniqueInput_1.TopicWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicWhereUniqueInput_1.TopicWhereUniqueInput)
], TopicCreateOrConnectWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TopicCreateWithoutSeasonSeriesInput_1.TopicCreateWithoutSeasonSeriesInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TopicCreateWithoutSeasonSeriesInput_1.TopicCreateWithoutSeasonSeriesInput)
], TopicCreateOrConnectWithoutSeasonSeriesInput.prototype, "create", void 0);
TopicCreateOrConnectWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TopicCreateOrConnectWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], TopicCreateOrConnectWithoutSeasonSeriesInput);
exports.TopicCreateOrConnectWithoutSeasonSeriesInput = TopicCreateOrConnectWithoutSeasonSeriesInput;
