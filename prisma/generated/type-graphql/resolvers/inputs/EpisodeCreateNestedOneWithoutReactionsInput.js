"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateNestedOneWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateOrConnectWithoutReactionsInput_1 = require("../inputs/EpisodeCreateOrConnectWithoutReactionsInput");
const EpisodeCreateWithoutReactionsInput_1 = require("../inputs/EpisodeCreateWithoutReactionsInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeCreateNestedOneWithoutReactionsInput = class EpisodeCreateNestedOneWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutReactionsInput_1.EpisodeCreateWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutReactionsInput_1.EpisodeCreateWithoutReactionsInput)
], EpisodeCreateNestedOneWithoutReactionsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateOrConnectWithoutReactionsInput_1.EpisodeCreateOrConnectWithoutReactionsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeCreateOrConnectWithoutReactionsInput_1.EpisodeCreateOrConnectWithoutReactionsInput)
], EpisodeCreateNestedOneWithoutReactionsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], EpisodeCreateNestedOneWithoutReactionsInput.prototype, "connect", void 0);
EpisodeCreateNestedOneWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateNestedOneWithoutReactionsInput", {
        isAbstract: true
    })
], EpisodeCreateNestedOneWithoutReactionsInput);
exports.EpisodeCreateNestedOneWithoutReactionsInput = EpisodeCreateNestedOneWithoutReactionsInput;
