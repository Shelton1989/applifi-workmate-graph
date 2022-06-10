"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateArtworkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateInput_1 = require("../../../inputs/ArtworkCreateInput");
let CreateArtworkArgs = class CreateArtworkArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ArtworkCreateInput_1.ArtworkCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ArtworkCreateInput_1.ArtworkCreateInput)
], CreateArtworkArgs.prototype, "data", void 0);
CreateArtworkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateArtworkArgs);
exports.CreateArtworkArgs = CreateArtworkArgs;
