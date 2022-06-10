"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteArtworkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkWhereUniqueInput_1 = require("../../../inputs/ArtworkWhereUniqueInput");
let DeleteArtworkArgs = class DeleteArtworkArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkWhereUniqueInput_1.ArtworkWhereUniqueInput)
], DeleteArtworkArgs.prototype, "where", void 0);
DeleteArtworkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteArtworkArgs);
exports.DeleteArtworkArgs = DeleteArtworkArgs;
