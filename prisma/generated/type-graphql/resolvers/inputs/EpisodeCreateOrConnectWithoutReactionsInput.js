"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeCreateOrConnectWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateWithoutReactionsInput_1 = require("../inputs/EpisodeCreateWithoutReactionsInput");
const EpisodeWhereUniqueInput_1 = require("../inputs/EpisodeWhereUniqueInput");
let EpisodeCreateOrConnectWithoutReactionsInput = class EpisodeCreateOrConnectWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeWhereUniqueInput_1.EpisodeWhereUniqueInput)
], EpisodeCreateOrConnectWithoutReactionsInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutReactionsInput_1.EpisodeCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutReactionsInput_1.EpisodeCreateWithoutReactionsInput)
], EpisodeCreateOrConnectWithoutReactionsInput.prototype, "create", void 0);
EpisodeCreateOrConnectWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeCreateOrConnectWithoutReactionsInput", {
        isAbstract: true
    })
], EpisodeCreateOrConnectWithoutReactionsInput);
exports.EpisodeCreateOrConnectWithoutReactionsInput = EpisodeCreateOrConnectWithoutReactionsInput;
