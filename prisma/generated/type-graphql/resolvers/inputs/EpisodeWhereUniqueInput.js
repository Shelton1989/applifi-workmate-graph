"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EpisodeWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let EpisodeWhereUniqueInput = class EpisodeWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], EpisodeWhereUniqueInput.prototype, "id", void 0);
EpisodeWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("EpisodeWhereUniqueInput", {
        isAbstract: true
    })
], EpisodeWhereUniqueInput);
exports.EpisodeWhereUniqueInput = EpisodeWhereUniqueInput;
