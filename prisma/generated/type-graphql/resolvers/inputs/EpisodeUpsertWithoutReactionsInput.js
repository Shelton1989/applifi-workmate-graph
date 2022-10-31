"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeUpsertWithoutReactionsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const EpisodeCreateWithoutReactionsInput_1 = require("../inputs/EpisodeCreateWithoutReactionsInput");
const EpisodeUpdateWithoutReactionsInput_1 = require("../inputs/EpisodeUpdateWithoutReactionsInput");
let EpisodeUpsertWithoutReactionsInput = class EpisodeUpsertWithoutReactionsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeUpdateWithoutReactionsInput_1.EpisodeUpdateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeUpdateWithoutReactionsInput_1.EpisodeUpdateWithoutReactionsInput)
], EpisodeUpsertWithoutReactionsInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => EpisodeCreateWithoutReactionsInput_1.EpisodeCreateWithoutReactionsInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", EpisodeCreateWithoutReactionsInput_1.EpisodeCreateWithoutReactionsInput)
], EpisodeUpsertWithoutReactionsInput.prototype, "create", void 0);
EpisodeUpsertWithoutReactionsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeUpsertWithoutReactionsInput", {
        isAbstract: true
    })
], EpisodeUpsertWithoutReactionsInput);
exports.EpisodeUpsertWithoutReactionsInput = EpisodeUpsertWithoutReactionsInput;
