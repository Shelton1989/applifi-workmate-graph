"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyArtworkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkWhereInput_1 = require("../../../inputs/ArtworkWhereInput");
let DeleteManyArtworkArgs = class DeleteManyArtworkArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkWhereInput_1.ArtworkWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ArtworkWhereInput_1.ArtworkWhereInput)
], DeleteManyArtworkArgs.prototype, "where", void 0);
DeleteManyArtworkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyArtworkArgs);
exports.DeleteManyArtworkArgs = DeleteManyArtworkArgs;
